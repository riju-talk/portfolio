import BackgroundGradient from './(components)/BackgrounGradient';
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <BackgroundGradient />
        {children}
      </body>
    </html>
  )
}
