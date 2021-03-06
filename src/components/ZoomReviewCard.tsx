import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { toastApolloError } from 'src/apollo/error'
import {
  ZoomReview,
  useToggleLikingZoomReviewMutation,
} from 'src/graphql/generated/types-and-hooks'
import {
  ALPACA_SALON_COLOR,
  ALPACA_SALON_DARK_GREY_COLOR,
  ALPACA_SALON_GREY_COLOR,
} from 'src/models/constants'
import { GridGap, H5 } from 'src/pages/post/[id]'
import { Skeleton } from 'src/styles'
import LikeIcon from 'src/svgs/ZoomReviewLikeIcon'
import { stopPropagation } from 'src/utils'
import styled from 'styled-components'

import { SquareWidth } from './PostCard'

const Li = styled.li`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 20px;
  overflow: auto;

  padding: 0.6rem;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const Date = styled.span`
  color: ${ALPACA_SALON_DARK_GREY_COLOR};
`

const DisabledH5 = styled.h5`
  color: ${ALPACA_SALON_GREY_COLOR};
`

const Content = styled.div`
  margin: 0.5rem 0 1rem;
`

const Button = styled.button<{ isLiked: boolean }>`
  display: flex;
  padding: 5px 10px;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(p) => (p.isLiked ? ALPACA_SALON_COLOR : '#eeeeee')};
  border-radius: 50px;
  gap: 0.3rem;

  > span {
    color: ${ALPACA_SALON_COLOR};
    font-weight: 500;
  }
`

const GridLi = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  margin-bottom: 1rem;
  gap: 0.9rem;
`

function changeDate(time: string) {
  const today = moment().format('YYYY.MM.DD')
  const createDate = moment(time).format('YYYY.MM.DD')
  const date = moment(today).diff(moment(createDate), 'days')

  return date === 0 ? '오늘' : date < 8 ? date + '일 전' : createDate
}

export function ZoomReviewLoadingCard() {
  return (
    <Li>
      <GridLi>
        <Skeleton width="2.3rem" height="2.3rem" borderRadius="100%" />
        <GridGap>
          <Skeleton width="5.5rem" height="1rem" />
          <Skeleton width="3.5rem" height="1rem" />
        </GridGap>
      </GridLi>
      <Skeleton width="80%" />
    </Li>
  )
}

type Props = {
  zoomReview: ZoomReview
}

function ZoomReviewCard({ zoomReview }: Props) {
  const writer = zoomReview.writer
  const router = useRouter()

  // function goToZoomReviewDetailPage() {
  //   router.push(`/zoom/${zoomReview.id}`)
  // }

  const [toggleLikingZoomReviewMutation, { loading: toggleLikingZoomReviewLoading }] =
    useToggleLikingZoomReviewMutation({
      onError: toastApolloError,
      variables: { id: zoomReview.id },
    })

  function toggleLikingZoomReview() {
    toggleLikingZoomReviewMutation()
  }

  function goToUserPage(e: any) {
    if (writer) {
      e.stopPropagation()
      router.push(`/@${writer.nickname}`)
    }
  }

  return (
    <Li>
      {writer ? (
        <Flex>
          <SquareWidth>
            <Image
              src={writer?.imageUrl ?? '/images/default-profile-image.webp'}
              alt="profile image"
              layout="fill"
              objectFit="cover"
              onClick={goToUserPage}
            />
          </SquareWidth>
          <div>
            <Link href={`/@${writer.nickname}`} passHref>
              <a onClick={stopPropagation} role="link" tabIndex={0}>
                <H5>{writer.nickname}</H5>
              </a>
            </Link>
            <Date>{changeDate(zoomReview.creationTime)}</Date>
          </div>
        </Flex>
      ) : (
        <DisabledH5 onClick={stopPropagation} role="link" tabIndex={0}>
          탈퇴한 사용자
        </DisabledH5>
      )}
      <Content>{zoomReview.contents}</Content>
      <Button
        disabled={toggleLikingZoomReviewLoading}
        isLiked={zoomReview.isLiked}
        onClick={toggleLikingZoomReview}
      >
        <LikeIcon isLiked={zoomReview.isLiked} />
        도움이 돼요
        <span>{zoomReview.likedCount}</span>
      </Button>
    </Li>
  )
}

export default memo(ZoomReviewCard)
