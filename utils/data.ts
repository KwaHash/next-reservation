import { BsFillBarChartLineFill } from 'react-icons/bs'
import { FaCameraRetro, FaSearch, FaRegChartBar } from 'react-icons/fa'
import { FiUploadCloud } from 'react-icons/fi'
import { HiOutlineCalculator } from 'react-icons/hi'
import { LuShieldCheck, LuClock, LuAward  } from 'react-icons/lu'
import { MdOutlinePalette } from 'react-icons/md'
import { RiRobot2Fill } from 'react-icons/ri'

export const phoneNumber = '03-1234-5678'

export const processSteps = [
	{
		step: '01',
		title: '写真アップロード',
		description: 'リフォーム箇所を撮影・アップロード',
		icon: FaCameraRetro,
	},
	{
		step: '02',
		title: 'AI診断実行',
		description: 'AIが瞬時に適正価格を算出・分析',
		icon: RiRobot2Fill
	},
	{
		step: '03',
		title: '業者マッチング',
		description: '条件に合った優良業者を自動選定',
		icon: FaSearch
	},
	{
		step: '04',
		title: '見積もり比較',
		description: '複数社の見積もりを透明性高く比較',
		icon: BsFillBarChartLineFill
	}
]

export const features = [
	{
		title: 'AI概算シミュレーション',
		description: '写真をアップロードするだけで、AIが瞬時にリフォーム費用を算出します。',
		link: '/ai-simulation',
		icon: HiOutlineCalculator,
		color: 'bg-blue-500'
	},
	{
		title: 'カラーシミュレーション',
		description: '実際の写真に色を合成して、リフォーム後のイメージを確認できます。',
		link: '/color-simulation',
		icon: MdOutlinePalette,
		color: 'bg-yellow-500'
	},
	{
		title: '見積書解析',
		description: '他社の見積書をアップロードして、詳細な価格比較と分析を行います。',
		link: '/estimate-upload',
		icon: FiUploadCloud,
		color: 'bg-green-500'
	},
	{
		title: '価格比較',
		description: '複数の施工会社の見積もりを一覧で比較検討できます。',
		link: '/comparison',
		icon: FaRegChartBar,
		color: 'bg-purple-500'
	}
]

export const benefits = [
	{
		title: '安心・安全',
		description: '厳選された東京都内の優良施工会社のみが参加しています。',
		icon: LuShieldCheck
	},
	{
		title: '時間短縮',
		description: 'AIによる自動化で、従来の半分の時間で見積もりを取得できます。',
		icon: LuClock,
	},
	{
		title: '品質保証',
		description: '全ての施工に対して、ゆたかホームの品質保証が適用されます。',
		icon: LuAward,
	}
]

export const faqs = [
	{
		question: 'AI見積もりの精度はどの程度ですか？',
		answer: '過去10,000件以上の施工データを学習したAIにより、実際の見積もりとの誤差は平均5%以内です。ただし、詳細な仕様により変動する場合があります。'
	},
	{
		question: 'ハウスメーカー経由との価格差はどの程度ですか？',
		answer: 'ハウスメーカー経由の場合、中間マージンにより20-40%高くなることが一般的です。当サービスでは直接施工会社とマッチングするため、適正価格でのご提案が可能です。'
	},
	{
		question: '東京都内のどのエリアに対応していますか？',
		answer: '23区全域および多摩エリア（八王子市、立川市、武蔵野市、三鷹市等）に対応しています。各エリアの地域特性に合わせた最適なご提案をいたします。'
	},
	{
		question: '見積もり後のキャンセルは可能ですか？',
		answer: '見積もりは無料で、契約前であればいつでもキャンセル可能です。お客様にご納得いただけるまで、じっくりとご検討ください。'
	},
	{
		question: '工事の品質保証はありますか？',
		answer: '全ての施工に対して最低5年間の品質保証を提供しています。また、定期点検やアフターサービスも充実しています。'
	}
]