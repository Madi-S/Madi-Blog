import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = ({ onCreate }) => {
    const [body, setBody] = useState('')
    const [alert, setAlert] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('Oqzhetpes')
    const [btnDisabled, setBtnDisabled] = useState(false)

    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        if (!title || !body || !author) {
            setAlert('Make sure every field contain information')
            return
        } else if (body && body.length <= 50) {
            setAlert('Make sure your blog doy has not less than 50 characters')
            return
        }
        setAlert('')
        setBtnDisabled(true)
        onCreate({ title, body, author })
            .then(history.push('/'))
    }

    return (
        <div className='content__create'>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Blog title:</label>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type='text'
                    id='title'
                    required
                />

                <label htmlFor='body'>Blog body:</label>
                <textarea
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    required
                ></textarea>

                <label htmlFor='author'>Blog authro:</label>
                <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    id='author'
                >
                    <option value='Oqzhetpes'>Oqzhetpes</option>
                    <option value='La Gazette'>La Gazette</option>
                    <option value='London Sports'>London Sports</option>
                </select>

                {alert && <div className='content__create-alert'>{alert}</div>}

                <button disabled={btnDisabled} type='submit'>
                    Add blog
                </button>
            </form>
        </div>
    )
}

export default Create
