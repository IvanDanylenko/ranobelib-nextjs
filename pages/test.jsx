import TemporaryNavigation from "@/components/TemporaryNavigation"
import Layout from "@/components/Layout"

export default function Test(props) {
  return (
    <Layout>
      <TemporaryNavigation />
      <div className="container container_responsive container_offset">
        <h1>Test page</h1>
      </div>

      <style jsx>
        {`
          h1 {
            text-align: center;
          }
          li {
            margin-bottom: 10px;
            font-size: 18px;
          }
        `}
      </style>
    </Layout>
  )
}
