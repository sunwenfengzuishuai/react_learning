import React,{Component} from 'react'
import './add-comment.css'
import proptypes from 'prop-types'
export default class AddComment extends Component{
    state ={
        name:'',
        comment:''
    }
    static propTypes = {
        addcomment:proptypes.func.isRequired
    }
    add = ()=>{
        if(window.confirm("确定提交么?")){
            const {addcomment} = this.props
            addcomment(this.state)
        }
    }
    changeName = (e)=>{
        let name = e.target.value
        this.setState({
            name
        })
    }
    changeComment = (e)=>{
        let comment = e.target.value
        this.setState({
            comment
        })
    }
    render(){
        const {name,comment} = this.state
        return(
            <div className="add-comments-wrap">
                <div className="name">
                    请输入姓名：
                    <input type="text" value={name} onChange={this.changeName}/>
                </div>
                <div className="msg">
                    请输入评论：
                    <input type="text" value={comment} onChange={this.changeComment}/>
                </div>
                <button onClick={this.add}>submit</button>
            </div>
        )
    }

}
