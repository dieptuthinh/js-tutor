import './GlobalStyles.scss';

// Tao ra 1 component GlobalStyles om 1 component add style cho toan bo component trong do
// Ap dụng các style CSS toàn cầu cho ứng dụng React
function GlobalStyles({ children }) {
    return children;
}

export default GlobalStyles;