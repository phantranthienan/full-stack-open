const AnecdoteDetail = ({ anecdote }) => {
  return (
    <div>
        <h2>{anecdote.content} by {anecdote.author}</h2>
        <p>
            has {anecdote.votes} votes
            <br />
            for more info see <a href={anecdote.info}>{anecdote.info}</a>
        </p>
    </div>
  )
}

export default AnecdoteDetail