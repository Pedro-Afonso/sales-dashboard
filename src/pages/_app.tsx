import { BasicLayout } from '@/shared/layouts/BaseLayout'
import '@/styles/global.scss'
import type { AppProps } from 'next/app'
// import { Provider } from 'react-redux'
// import { setupStore } from '@/shared/config/store'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    // <Provider store={setupStore()}>
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
    // </Provider>
  )
}

export default App
