import React,{Component} from 'react'

import proptypes from 'prop-types'
export default class CommentItem extends Component{
    static propTypes = {
        comment:proptypes.object.isRequired,
        index:proptypes.number.isRequired,
        delcomment:proptypes.func.isRequired
    }
    del = (e)=>{
        e.preventDefault()
        const {index,delcomment} = this.props
        if(window.confirm("确定删除么？")){
            delcomment(index)
        }
    }
    render(){
        const {comment} = this.props
        return (
            <div>
                {comment.name}说：
                <div>{comment.comment}</div>
                <a href="www.baidu.com" onClick={this.del}>删除</a>
            </div>
        )
    }
}
