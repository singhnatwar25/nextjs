import Image from 'next/image'
import MyImage from '../../public/images/code.png'

export default function LearnUseImage() {
  return (
    <div>
        <Image src={MyImage} alt='code'/>
    </div>
  )
}
