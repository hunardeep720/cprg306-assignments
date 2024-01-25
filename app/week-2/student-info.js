import React from 'react';
import Link from 'next/link';
const StudentInfo = () => {
        const name = "Hunardeep Singh";
        const Github_link = <Link href="https://github.com/hunardeep720/cprg306-assignments.git" target='_blank'>Github</Link>;
        return(
            <div>
                <h1>Student Info</h1>
                <p>Name: {name}</p>
                <p>Github Link: {Github_link}</p>
            </div>
        )
}
export default StudentInfo;