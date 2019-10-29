import React,{Component} from 'react'
import AddComment from './add-comment/add-comment'
import CommentList from './comment-list/comment-list'

import './app.css'

export default class App extends Component{
    state={
        comments:[
            {name:'李白',comment:'react真香'},
            {name:'杜甫',comment:'vue天下第一'}
       ]
    }
    addcomment = (comment)=>{
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }
    delcomment = (index)=>{
        const {comments} = this.state
        comments.splice(index,1)
        this.setState({comments})
    }
    render(){
        const {comments} = this.state
        return (
            <div className="comment-pro">
                <div className="title">
                    请输入对React的评论吧，少年
                </div>
                <div style={{width:'100%', height:'200px',background:'red',display:'none'}}></div>
                <div className="components-wrap">
                    <AddComment addcomment={this.addcomment}/>
                    <CommentList comments={comments} delcomment={this.delcomment}/>
                </div>
            </div>
        )
    }
}
