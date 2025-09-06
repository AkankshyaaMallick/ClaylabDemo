import Image from 'next/image'

const Claylab = () => {
	return <div className='flex flex-col gap-4 items-center '>
		<Image
			src={"/claylab assets/general/claylab-logo.png"}
			height={50}
			width={175}
			alt={"claylab-logo"}
			className=''
		/>
		<Image
			src={"/claylab assets/aboutUs/claylabFullForm.png"}
			height={40}
			width={300}
			quality={100}
			alt={"claylab-fullform"}
			className='w-[75vw]'
		/>
	</div>
}

export default Claylab