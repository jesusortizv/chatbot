/**
 * Custom directive: v-scroll-into-view
 * Accepts:
 * statement, if it resolves to true element will scroll into view
 */
export default {
  inserted (el) {
    el.scrollIntoView()
  }
}
