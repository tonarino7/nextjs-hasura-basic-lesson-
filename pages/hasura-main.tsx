import { VFC } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '../queries/queries'
import { GetUsersQuery } from '../types/generated/graphql'
import { Layout } from '../components/Layout'

const FetchMain: VFC = () => {
  const { data, error, loading } = useQuery<GetUsersQuery>(GET_USERS, {
    fetchPolicy: 'cache-first',
    //fetchPolicy: 'network-only' //毎回サーバーサイドに取りに行く。通信が完了したあとにデータを一気に取得
    //fetchPolicy: 'cache-first' //dataがサーバーサイドで頻繁に更新されるアプリケーションでは非推奨。古いキャッシュを読んじゃう可能性
    // fetchPolicy: 'cache-and-network' //だいたいこれでいいらしい//取得している間は既存のキャッシュがあれば内容を表示。通信が完了すると最新のデータで上書きしてくれる
    //fetchPolicy: 'no-cache' //fetch時にキャッシュが作られないようになるらしい。キャッシュを全く使わずにuseQueryごとにサーバーサイドの値を取得する
  })
  if (error) {
    return (
      <Layout title="Hasura fetchPolicy">
        <p>Error:{error.message}</p>
      </Layout>
    )
  }
  return (
    <Layout title="Hasura fetchPolicy">
      <p className=" mb-6 font-bold">Hasura main page</p>
      {console.log(data)}
      {data?.users.map((user) => {
        return (
          <p className="my-1" key={user.id}>
            {user.name}
          </p>
        )
      })}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </Layout>
  )
}

export default FetchMain
