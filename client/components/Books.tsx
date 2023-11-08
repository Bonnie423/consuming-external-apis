import React, { useEffect, useState } from 'react'
import { getBooks } from '../apiClient/bookAPI.ts'
import { BookData, Work } from '../../models/books.ts'


const Books = () => {
  const [books, setBooks] = useState<Work[] | null>(null)

  useEffect(() => {
    try {
      fecthBooks()
    } catch (err) {
      console.error(err)
    }
  }, [])

  async function fecthBooks() {
    const booksData = await getBooks()
    // console.log(booksData)
    setBooks(booksData)
  }

  return (
    <div>
      <h2>Books</h2>
      {books ? (
        <ul>
          {books.map((book, index) => {
            return (
              <li key={index}>
                {book.work.title && <h3>Title: {book.work.title}</h3>}
                <p>First Published Year : {book.work.first_publish_year}</p>
                Author:{' '}
                <ol>
                  {book.work.author_names.map((name, index) => {
                    return <li key={index}>{name}</li>
                  })}
                </ol>
              </li>
            )
          })}
        </ul>
      ) : (
        <p>No book found here</p>
      )}
    </div>
  )
}

export default Books
