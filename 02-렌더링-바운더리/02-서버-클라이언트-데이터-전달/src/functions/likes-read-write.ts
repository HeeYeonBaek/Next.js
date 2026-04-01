


// 데이터 읽기 (서버 전용 함수)
export async function readLikes() {
  'use server' // 서버 지시어

  return 0
}

// 데이터 쓰기 (서버 전용 함수)
export async function writeLikes(likeCount: number) {
  console.log(likeCount)
}
