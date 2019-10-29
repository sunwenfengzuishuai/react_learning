import React, {Component} from 'react'
import CommentItem from '../comment-item/comment-item'
import propTypes from 'prop-types'

import './comment-list.css'

export default class CommentList extends Component {
    static propTypes = {
        comments:propTypes.array.isRequired,
        delcomment:propTypes.func.isRequired
    }

    render() {
        const {comments,delcomment} = this.props
        return (
            <div className="comments-list-wrap">
                <div>评论内容如下：</div>

                {comments.map((item,index)=> <CommentItem key={index}  comment={item} index={index} delcomment={delcomment}/>)}
            </div>
        )
    }
}
