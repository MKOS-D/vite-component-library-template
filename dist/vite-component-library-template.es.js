import { jsx as e } from 'react/jsx-runtime'
const s = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    TERTIARY: 'tertiary',
  },
  a = {
    PRIMARY: 'bg-green-200 hover:bg-green-400 active:bg-green-500',
    SECONDARY: 'bg-blue-200 hover:bg-blue-400 active:bg-blue-500',
    TERTIARY: 'bg-red-200 hover:bg-red-400 active:bg-red-500',
  },
  i = ({ label: t, variant: n = 'PRIMARY', isDisabled: r = !1, onClick: o }) =>
    /* @__PURE__ */ e('button', {
      className: `transition-colors px-6 py-2 rounded-md ${a[n]} ${
        r ? 'bg-gray-300 text-slate-600 cursor-not-allowed pointer-events-none' : ''
      }`,
      onClick: r ? o : void 0,
      children: t,
    }),
  g = () => /* @__PURE__ */ e('div', { children: 'Banner' }),
  l = () => /* @__PURE__ */ e('div', { children: 'Footer' })
export { s as AT_BUTTON_VARIANT, i as AtButton, g as MlBanner, l as OrFooter, a as variantClasses }
