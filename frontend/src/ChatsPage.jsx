import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    
    return <>
        <div style = {{height:'100vh'}}>
            <PrettyChatWindow
                projectId = 'bc372d35-6536-43ca-ba13-3b0e5ac135cf'
                username = {props.user.username}
                secret = {props.user.secret}
                style =  {{height: '100%'}}
            />
        </div>
    </>
}

export default ChatsPage;