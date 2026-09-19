// Signature line motif — abstract topographic / contour lines evoking imaging
// and recovery. Subtle, low-opacity, sits behind hero and section breaks.
export default function Motif({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="currentColor" strokeWidth="1.25" opacity="0.5">
        <path d="M-20 120C120 60 260 60 380 130S560 230 640 180" />
        <path d="M-20 180C120 120 260 120 380 190S560 290 640 240" />
        <path d="M-20 240C120 180 260 180 380 250S560 350 640 300" />
        <path d="M-20 300C120 240 260 240 380 310S560 410 640 360" />
        <path d="M-20 360C120 300 260 300 380 370S560 470 640 420" />
        <path d="M-20 420C120 360 260 360 380 430S560 530 640 480" />
        <path d="M-20 480C120 420 260 420 380 490S560 590 640 540" />
      </g>
      <g stroke="currentColor" strokeWidth="1.25" opacity="0.28">
        <circle cx="300" cy="300" r="70" />
        <circle cx="300" cy="300" r="120" />
        <circle cx="300" cy="300" r="170" />
      </g>
    </svg>
  )
}
