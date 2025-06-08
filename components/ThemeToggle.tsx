import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button className="toggle-theme" onClick={() => setDark(!dark)}>
      {dark ? 'الوضع الفاتح' : 'الوضع الداكن'}
    </button>
  );
}
