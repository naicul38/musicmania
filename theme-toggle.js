(function () {
    'use strict';

    var storageKey = 'vicetream_color_mode';

    function getMode() {
        try {
            var savedMode = localStorage.getItem(storageKey);
            if (savedMode === 'light' || savedMode === 'dark') return savedMode;
        } catch (error) {
            // Private browsing can deny storage; the system preference still works.
        }
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyMode(mode) {
        var isDark = mode === 'dark';
        document.documentElement.setAttribute('data-color-mode', mode);
        document.querySelectorAll('.theme-switch').forEach(function (toggle) {
            toggle.setAttribute('aria-checked', String(isDark));
            toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        });
        var themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) themeColor.setAttribute('content', isDark ? '#171526' : '#FFF4E0');
    }

    // This file is loaded synchronously in the document head so returning visitors
    // get their saved mode before the page becomes interactive.
    applyMode(getMode());

    document.addEventListener('DOMContentLoaded', function () {
        applyMode(getMode());
        document.querySelectorAll('.theme-switch').forEach(function (toggle) {
            toggle.addEventListener('click', function () {
                var nextMode = document.documentElement.getAttribute('data-color-mode') === 'dark' ? 'light' : 'dark';
                try { localStorage.setItem(storageKey, nextMode); } catch (error) {}
                applyMode(nextMode);
            });
        });
    });
}());
