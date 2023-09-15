;(function (e, t) {
  typeof exports == 'object' && typeof module < 'u'
    ? t(exports, require('react/jsx-runtime'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'react/jsx-runtime'], t)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self),
      t((e['vite-component-library-template'] = {}), e['react/jsx-runtime']))
})(this, function (e, t) {
  'use strict'
  const l = '',
    o = { PRIMARY: 'primary', SECONDARY: 'secondary', TERTIARY: 'tertiary' },
    n = {
      PRIMARY: 'bg-green-200 hover:bg-green-400 active:bg-green-500',
      SECONDARY: 'bg-blue-200 hover:bg-blue-400 active:bg-blue-500',
      TERTIARY: 'bg-red-200 hover:bg-red-400 active:bg-red-500',
    },
    i = ({ label: c, variant: d = 'PRIMARY', isDisabled: r = !1, onClick: u }) =>
      t.jsx('button', {
        className: `transition-colors px-6 py-2 rounded-md ${n[d]} ${
          r ? 'bg-gray-300 text-slate-600 cursor-not-allowed pointer-events-none' : ''
        }`,
        onClick: r ? u : void 0,
        children: c,
      }),
    s = () => t.jsx('div', { children: 'Banner' }),
    a = () => t.jsx('div', { children: 'Footer' })
  ;(e.AT_BUTTON_VARIANT = o),
    (e.AtButton = i),
    (e.MlBanner = s),
    (e.OrFooter = a),
    (e.variantClasses = n),
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
})
