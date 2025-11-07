import { useState } from "react";

export default function VideoAnalysisPage() {
  const [videoFile, setVideoFile] = useState(null);
  const [outputUrl, setOutputUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("idle"); // idle | uploading | analyzing | done
  const [videoKey, setVideoKey] = useState(0); // force video reload

  const processing = phase === "uploading" || phase === "analyzing";

  const handleAnalyze = () => {
    if (!videoFile || processing) return;

    setOutputUrl("");
    setProgress(0);
    setPhase("uploading");

    const formData = new FormData();
    formData.append("file", videoFile);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/api/analyze", true);

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        setProgress(Math.round((e.loaded * 100) / e.total));
      }
    };

    // as soon as upload finishes, switch to analyzing (server is doing work now)
    xhr.upload.onload = () => setPhase("analyzing");

    xhr.onload = () => {
      try {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          const url = `${data.url}?t=${Date.now()}`; // cache-bust
          setOutputUrl(url);
          setVideoKey(Date.now());
          setPhase("done");
          setProgress(0);
        } else {
          alert("Error analyzing video");
          setPhase("idle");
        }
      } catch (err) {
        console.error("Response parse error:", err);
        alert("Error analyzing video");
        setPhase("idle");
      }
    };

    xhr.onerror = () => {
      alert("Network error during analysis");
      setPhase("idle");
    };

    xhr.send(formData);
  };

  return (
    <div className="relative p-6">
      {/* Title */}
      <h1 className="mb-6 text-3xl font-extrabold text-green-400">Video Analysis</h1>

      {/* Uploader card */}
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <label className="inline-flex items-center rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/90 shadow hover:bg-white/15 transition cursor-pointer">
            <input
              type="file"
              accept="video/mp4"
              onChange={(e) => setVideoFile(e.target.files[0])}
              className="hidden"
            />
            <span>Choose MP4</span>
          </label>

          <div className="mt-3 md:mt-0 text-sm text-white/70 truncate">
            {videoFile ? videoFile.name : "No file selected"}
          </div>

          <div className="mt-4 md:mt-0 md:ml-auto">
            <button
              onClick={handleAnalyze}
              disabled={!videoFile || processing}
              className={`px-5 py-2.5 rounded-xl font-semibold text-white shadow-lg transition ${
                processing
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500"
              }`}
            >
              {processing
                ? phase === "uploading"
                  ? "Uploading…"
                  : "Analyzing…"
                : "Analyze Video"}
            </button>
          </div>
        </div>

        {/* Upload progress (percent only during upload) */}
        {phase === "uploading" && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-white/70 mb-1">
              <span>Uploading</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Analyzing (indeterminate bar, no percent) */}
        {phase === "analyzing" && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-white/70 mb-1">
              <span>Analyzing</span>
              <span>working…</span>
            </div>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="sk-shimmer absolute inset-y-0 w-1/3" />
            </div>
          </div>
        )}
      </div>

      {/* RESULT */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-white/90 mb-3">Result</h2>

        {/* Centered loader card with StatKick wordmark (animated) */}
        {phase === "analyzing" && (
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col items-center justify-center space-y-4">
                {/* Animated StatKick wordmark */}
                <div className="sk-wordmark text-4xl font-extrabold tracking-widest">
                  StatKick
                </div>

                <div className="text-xs text-white/70">Analyzing your match…</div>

                {/* Thin indeterminate shimmer bar */}
                <div className="relative mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="sk-shimmer absolute inset-y-0 w-1/3" />
                </div>

                <p className="mt-3 text-center text-xs text-white/60">
                  Detecting players, ball, referees & assigning teams
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Final video (huge, non-distorted) */}
        {!processing && outputUrl && (
          <div className="rounded-2xl border border-white/10 bg-black shadow-2xl overflow-hidden">
            <video
              key={videoKey}
              controls
              preload="metadata"
              playsInline
              className="w-full h-[88vh] md:h-[92vh] object-contain bg-black"
            >
              <source src={outputUrl} type="video/mp4" />
              Your browser does not support MP4 playback.
            </video>
          </div>
        )}

        {!processing && !outputUrl && (
          <div className="w-full rounded-2xl border border-white/10 p-6 text-white/60">
            No video yet. Upload a clip and click <span className="text-white">Analyze Video</span>.
          </div>
        )}
      </div>

      {/* Inline CSS animations to avoid Tailwind purge issues */}
      <style>{`
        /* shimmering bar */
        @keyframes sk-shimmer-move {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(220%); }
        }
        .sk-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          animation: sk-shimmer-move 1.6s ease-in-out infinite;
        }

        /* StatKick gradient sheen across text */
        @keyframes sk-sheen {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .sk-wordmark {
          background-image: linear-gradient(90deg, #34d399, #a7f3d0, #34d399);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: sk-sheen 2.2s linear infinite;
          text-shadow: 0 2px 30px rgba(52, 211, 153, 0.12);
        }
      `}</style>
    </div>
  );
}
