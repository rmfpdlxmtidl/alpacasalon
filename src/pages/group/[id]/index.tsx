import Image from 'next/image'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { toastApolloError } from 'src/apollo/error'
import PageHead from 'src/components/PageHead'
import PostCard from 'src/components/PostCard'
import {
  Post,
  useGroupQuery,
  useJoinGroupMutation,
  usePostsByGroupQuery,
} from 'src/graphql/generated/types-and-hooks'
import useNeedToLogin from 'src/hooks/useNeedToLogin'
import { PrimaryButton } from 'src/pages/post'
import BackIcon from 'src/svgs/back-icon.svg'
import WriteIcon from 'src/svgs/write-icon.svg'
import styled from 'styled-components'

const Frame16to7 = styled.div`
  aspect-ratio: 16 / 7;
  position: relative;
`

const Absolute = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 3rem;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    cursor: pointer;
    width: 3rem;
    padding: 0.5rem;
  }
`

const description = ''

export default function GroupDetailPage() {
  const router = useRouter()
  const groupId = (router.query.id ?? '') as string

  const { data: data2 } = useGroupQuery({
    onError: toastApolloError,
    skip: !groupId,
    variables: { id: groupId },
  })

  const { data } = usePostsByGroupQuery({
    onError: toastApolloError,
    skip: !groupId,
    variables: { groupId },
  })

  const [joinGroupMutataion, { loading }] = useJoinGroupMutation({
    onError: toastApolloError,
    update: (cache) => {
      cache.evict({ fieldName: 'myGroups' })
    },
  })

  const group = data2?.group
  const posts = data?.postsByGroup

  function goToPostCreationPage() {
    if (window.sessionStorage.getItem('jwt') || window.localStorage.getItem('jwt')) {
      router.push(`/post/create?groupId=${groupId}`)
    } else {
      toast.info('로그인이 필요합니다')
      sessionStorage.setItem('redirectionUrlAfterLogin', `/post/create?groupId=${groupId}`)
      router.push('/login')
    }
  }

  function goBack() {
    router.back()
  }

  useNeedToLogin()

  return (
    <PageHead title=" - 알파카살롱" description={description}>
      <Frame16to7>
        <Absolute>
          <BackIcon onClick={goBack} />
        </Absolute>
        <Image
          src={group?.imageUrl ?? '/images/default-image.webp'}
          alt="group cover"
          layout="fill"
          objectFit="cover"
        />
      </Frame16to7>
      <pre style={{ overflow: 'scroll' }}>{JSON.stringify(group, null, 2)}</pre>
      <h3>게시글</h3>
      {posts?.map((post) => (
        <PostCard key={post.id} post={post as Post} />
      ))}

      <button onClick={() => joinGroupMutataion({ variables: { id: groupId } })}>
        {group?.isJoined ? '탈퇴하기' : '+ 이 그룹 가입하기'}
        {loading && '...'}
      </button>
      <PrimaryButton disabled={!groupId || !group?.isJoined} onClick={goToPostCreationPage}>
        <WriteIcon />
        글쓰기
      </PrimaryButton>
    </PageHead>
  )
}
