/**
 * Calculates a genuine daily study streak based on actual completed topics and videos in MongoDB.
 * - If 0 topics completed: Streak is 0.
 * - If user studied today: Streak counts today + consecutive prior days.
 * - If user studied yesterday: Yesterday's streak is maintained.
 * - If neither today nor yesterday has study activity: Streak resets to 0.
 */
export function computeStreak(completedTopics) {
  if (!completedTopics) return 0;
  const entries = completedTopics instanceof Map ? Array.from(completedTopics.values()) : Object.values(completedTopics);
  const activeDates = {};
  entries.forEach((val) => {
    let dStr = null;
    if (typeof val === "string") {
      dStr = val.slice(0, 10);
    } else if (val && typeof val === "object" && val.completedAt) {
      dStr = String(val.completedAt).slice(0, 10);
    }
    if (dStr && /^\d{4}-\d{2}-\d{2}$/.test(dStr)) {
      activeDates[dStr] = true;
    }
  });

  if (Object.keys(activeDates).length === 0) return 0;

  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().slice(0, 10);

  if (!activeDates[todayStr] && !activeDates[yesterdayStr]) {
    return 0;
  }

  let streak = 0;
  let check = new Date(now);
  if (!activeDates[todayStr]) {
    check = yesterday;
  }

  while (true) {
    const cStr = check.toISOString().slice(0, 10);
    if (activeDates[cStr]) {
      streak += 1;
      check.setDate(check.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}
