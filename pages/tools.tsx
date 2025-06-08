import { useRouter } from 'next/router'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

export default function Tools() {
  const router = useRouter()
  const recipe = router.query.recipe as string | undefined

  return (
    <main className="container flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <NavBar />
        <h2 className="mb-4">الأدوات الإضافية</h2>
        {recipe ? (
          <p>الوصفة المختارة: {recipe}</p>
        ) : (
          <p>اختر أداة من القائمة الجانبية.</p>
        )}
      </div>
      <Footer />
    </main>
  )
}
