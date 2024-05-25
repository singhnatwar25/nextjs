import Image from 'next/image'
import MyImage from '../../public/images/code.png'

export default function learnUseImage() {
  return (
    <div>
        <Image src={MyImage} alt='code'/>
    </div>
  )
}
