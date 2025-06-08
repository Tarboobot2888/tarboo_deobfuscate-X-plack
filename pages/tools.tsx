import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

export default function Tools() {
  const router = useRouter()
  const recipe = router.query.recipe as string | undefined

  return (
    <Layout>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <h2 className="mb-4 text-xl font-bold">الأدوات الإضافية</h2>
          {recipe ? (
            <p>الوصفة المختارة: {recipe}</p>
          ) : (
            <p>اختر أداة من القائمة الجانبية.</p>
          )}
        </div>
      </div>
    </Layout>
  )
}
