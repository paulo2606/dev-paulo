export default function Avatar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 250"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Avatar de Paulo Henrique"
    >
      {/* Shoulders / dark jacket */}
      <path
        d="M12 250 C12 212 42 192 100 185 C158 192 188 212 188 250 Z"
        fill="#1E293B"
      />
      {/* Jacket collar */}
      <path
        d="M78 180 Q100 170 122 180 L126 200 Q100 190 74 200 Z"
        fill="#2D3F5A"
      />

      {/* Neck */}
      <path
        d="M84 160 L84 186 Q100 192 116 186 L116 160 Q100 168 84 160 Z"
        fill="#B07850"
      />

      {/* Head – main oval */}
      <ellipse cx="100" cy="106" rx="62" ry="74" fill="#B07850" />

      {/* Ears */}
      <ellipse cx="38" cy="110" rx="10" ry="15" fill="#B07850" />
      <ellipse cx="162" cy="110" rx="10" ry="15" fill="#B07850" />
      <ellipse cx="38" cy="110" rx="5.5" ry="9" fill="#9A6840" />
      <ellipse cx="162" cy="110" rx="5.5" ry="9" fill="#9A6840" />

      {/* Hair – wavy silhouette */}
      <path
        d="
          M40 100
          C38 56 60 28 100 26
          C140 28 162 56 160 100
          L156 82
          Q153 65 146 54
          C138 44 128 38 116 42
          Q109 35 100 34
          Q91 35 84 42
          C72 38 62 44 54 54
          Q47 65 44 82 Z
        "
        fill="#0D0908"
      />
      {/* Wavy texture – top left */}
      <path
        d="M49 76 Q57 69 65 76 Q73 69 81 76"
        stroke="#1C1208"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Wavy texture – top right */}
      <path
        d="M119 76 Q127 69 135 76 Q143 69 151 76"
        stroke="#1C1208"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Wavy texture – center */}
      <path
        d="M76 60 Q84 54 92 60"
        stroke="#1C1208"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M108 60 Q116 54 124 60"
        stroke="#1C1208"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Eyebrows */}
      <path
        d="M64 86 Q76 80 88 84"
        stroke="#0D0908"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M112 84 Q124 80 136 86"
        stroke="#0D0908"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Left eye */}
      <ellipse cx="78" cy="100" rx="13" ry="10" fill="white" />
      <ellipse cx="80" cy="101" rx="8" ry="8" fill="#0D0908" />
      <ellipse cx="83" cy="99" rx="2.5" ry="2.5" fill="white" />
      <path d="M65 100 Q78 91 91 100" stroke="#0D0908" strokeWidth="1.5" fill="none" />

      {/* Right eye */}
      <ellipse cx="122" cy="100" rx="13" ry="10" fill="white" />
      <ellipse cx="120" cy="101" rx="8" ry="8" fill="#0D0908" />
      <ellipse cx="123" cy="99" rx="2.5" ry="2.5" fill="white" />
      <path d="M109 100 Q122 91 135 100" stroke="#0D0908" strokeWidth="1.5" fill="none" />

      {/* Nose */}
      <path
        d="M97 118 Q93 128 89 134 Q100 140 111 134 Q107 128 103 118 Z"
        fill="#9A6840"
        opacity="0.38"
      />
      <ellipse cx="92" cy="134" rx="4" ry="3" fill="#8A5A30" opacity="0.35" />
      <ellipse cx="108" cy="134" rx="4" ry="3" fill="#8A5A30" opacity="0.35" />

      {/* Mouth – slight smirk */}
      <path
        d="M85 147 Q93 155 100 154 Q107 155 115 147"
        stroke="#7A4B2A"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* ── GOATEE / CAVANHAQUE ── */}
      {/* Thin mustache */}
      <path
        d="M88 142 Q94 146 100 145 Q106 146 112 142"
        stroke="#0D0908"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Soul patch under lip */}
      <ellipse cx="100" cy="157" rx="6" ry="5" fill="#0D0908" opacity="0.72" />
      {/* Chin beard */}
      <path
        d="M91 162 Q88 172 90 180 Q100 186 110 180 Q112 172 109 162 Q104 167 100 167 Q96 167 91 162 Z"
        fill="#0D0908"
        opacity="0.68"
      />
      {/* Side connections */}
      <path
        d="M89 144 Q87 153 89 162"
        stroke="#0D0908"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.68"
      />
      <path
        d="M111 144 Q113 153 111 162"
        stroke="#0D0908"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.68"
      />
    </svg>
  );
}
