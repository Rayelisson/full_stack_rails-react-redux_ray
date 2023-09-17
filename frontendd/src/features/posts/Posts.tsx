/* eslint-disable prettier/prettier */
import { useEffect } from "react"
import { useAppSelector } from "../../app/hooks"
import { Statuses, fetchPostsAsync, selectPosts } from "./postSlice"
import { useDispatch } from "react-redux"

function Posts() {
  const posts = useAppSelector(selectPosts)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchPostsAsync()
  }, [dispatch])

  let contents

  // eslint-disable-next-line no-restricted-globals
  if (status !== Statuses.UpToDate) {
    contents = <div>LOading...</div>
  } else {
    contents = (
      <div className="card">
        <div className="card-body">
          <h3>{status}</h3>
          {/**form goes here */}
          {posts &&
            posts.length > 0 &&
            posts.map((post) => {
              return (
                <div key={post.id} style={{ margin: "5em" }}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              )
            })}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1>Posts</h1>
    </div>
  )
}
export default Posts
