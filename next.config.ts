import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/desktop": ["./desktop/**/*"],
    "/VoxelLauncher.zip": ["./desktop/**/*"],
    "/download": ["./desktop/**/*"],
  },
  outputFileTracingExcludes: {
    "/*": ["./desktop/**/__pycache__/**", "./desktop/.venv/**"],
  },
};

export default nextConfig;
