/**
 * Set a cookie
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {Object} options - Optional settings: expires (days), path, secure, sameSite
 */
export function setCookie(name, value, options = {}) {
  const { expires, path = '/', secure = false, sameSite = 'Lax' } = options;
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (expires) {
    const date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000); // expires in days
    cookieString += `; expires=${date.toUTCString()}`;
  }

  cookieString += `; path=${path}`;
  if (secure) cookieString += '; Secure';
  if (sameSite) cookieString += `; SameSite=${sameSite}`;

  document.cookie = cookieString;
}

/**
 * Get a cookie value
 * @param {string} name - Cookie name
 * @returns {string|null} - Cookie value or null if not found
 */
export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${encodeURIComponent(name)}=`);
  if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
  return null;
}

/**
 * Delete a cookie
 * @param {string} name - Cookie name
 * @param {Object} options - Optional settings: path, secure, sameSite
 */
export function deleteCookie(name, options = {}) {
  setCookie(name, '', { ...options, expires: -1 });
}

/**
 * Delete all cookies in current domain
 */
export function deleteAllCookies() {
  const cookies = document.cookie.split(';');

  for (const cookie of cookies) {
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
    // Delete cookie with path=/ to ensure all paths are covered
    deleteCookie(name, { path: '/' });
  }
}
