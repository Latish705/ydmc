import { GoSearch } from 'react-icons/go';
import Blogcard from '../../components/BlogCard/Blogcard';
import './blogs.css';

function Blogs() {
    const data = [
        {
            id: 1,
            title: 'Blog Post 1',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quis repellat in molestiae amet quibusdam consequuntur earum quo necessitatibus facilis eaque atque. Ex amet modi veritatis doloremque, totam distinctio fugiat.',
            imageUrl: 'https://imgs.search.brave.com/LAznYLZ2g3QC4iX7VEu7bT_mr6NmlVr2nK5oAgF3KSQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waXhh/YmF5LmNvbS9nZXQv/Z2RmYWJjNjI1YzE3/OGQwYWI2NzFiMzQy/NmY4YzAwNmRmZDQ3/MTU3YzcwOGU3MjUw/YzMyNjBiMjViZWVk/ZThkYmU2Yzg1ODc4/YTAyZjNlZGQ2MzIz/YjM4MzM0YWZkNjA5/YzE3OTZkZmNjYzEw/YzIwYTkyYjFhM2Fm/NjVhZjliMDBmXzY0/MC5qcGc'
        },
        {
            id: 2,
            title: 'Blog Post 2',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quis repellat in molestiae amet quibusdam consequuntur earum quo necessitatibus facilis eaque atque. Ex amet modi veritatis doloremque, totam distinctio fugiat.',
            imageUrl: 'https://imgs.search.brave.com/LAznYLZ2g3QC4iX7VEu7bT_mr6NmlVr2nK5oAgF3KSQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waXhh/YmF5LmNvbS9nZXQv/Z2RmYWJjNjI1YzE3/OGQwYWI2NzFiMzQy/NmY4YzAwNmRmZDQ3/MTU3YzcwOGU3MjUw/YzMyNjBiMjViZWVk/ZThkYmU2Yzg1ODc4/YTAyZjNlZGQ2MzIz/YjM4MzM0YWZkNjA5/YzE3OTZkZmNjYzEw/YzIwYTkyYjFhM2Fm/NjVhZjliMDBmXzY0/MC5qcGc'
        }
    ];
  return (
    <>
    <div className="SearchDiv">
        <div className="InputBarDiv">
            <div className="InputWrapper">
            <input type="text" className='InputBar' placeholder='Search for Blogs'/>
            <GoSearch className="SearchIcon" size={"2rem"}/>
            </div>
        </div>
    </div>
    <div className="Heading">
    <h1>Blogs</h1>
    <p>Accelerate with Us</p>
    </div>
    {data.map(blog => (
    <div className="BlogsCard" key={blog.id}>
    <Blogcard ImageUrl={blog.imageUrl} title={blog.title} Content={blog.description} />
    </div>
    ))}
    </>
  )
}

export default Blogs