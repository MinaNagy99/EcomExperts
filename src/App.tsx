import { BundleProvider } from './context/BundleProvider';
import { BundleBuilderPage } from './pages/BundleBuilderPage';

export default function App() {
  return <BundleProvider><BundleBuilderPage /></BundleProvider>;
}
