import React from 'react';
import Filter from '../filter'
import Tasks from '../tasks'
import './content.css'


export default function content() {
    return (
        <section className="content">
            <Filter/>
            <Tasks/>
        </section>
    )
}

