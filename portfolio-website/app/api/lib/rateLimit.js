// Simple in-memory rate limiter
const rateLimit = new Map();

export function checkRateLimit(identifier, limit = 5, windowMs = 60000) {
  const now = Date.now();
  const userRequests = rateLimit.get(identifier) || [];

  // Filter out old requests outside the time window
  const recentRequests = userRequests.filter(
    (timestamp) => now - timestamp < windowMs
  );

  // Check if limit exceeded
  if (recentRequests.length >= limit) {
    return {
      success: false,
      remaining: 0,
      resetAt: recentRequests[0] + windowMs,
    };
  }

  // Add current request
  recentRequests.push(now);
  rateLimit.set(identifier, recentRequests);

  return {
    success: true,
    remaining: limit - recentRequests.length,
    resetAt: now + windowMs,
  };
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, timestamps] of rateLimit.entries()) {
    const recentTimestamps = timestamps.filter((t) => now - t < 60000);
    if (recentTimestamps.length === 0) {
      rateLimit.delete(key);
    } else {
      rateLimit.set(key, recentTimestamps);
    }
  }
}, 60000);
