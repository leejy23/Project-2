import NewBtn from './NewBtn.js'
import SideBarList from './SidebarList.js'
import { request } from '../../utils/api.js'

export default function SidebarPage({ $target, initalState, onEditing }) {
    const $page = document.createElement('div')
    $target.appendChild($page)

    $page.classList.add('listContainer')
    const $sidebarList = new SideBarList({
        $target: $page,
        initalState,
        onEditing,
    })

    this.setState = () => {
        $sidebarList.setState()
    }

    const onCreate = () => {
        request('', {
            method: 'POST',
            body: JSON.stringify({
                title: '문서 제목',
                parent: null,
            }),
        })
        $sidebarList.setState()
    }

    const $newBtn = new NewBtn({ $target: $page, onCreate, onEditing })
}
