import * as TaroComponent from '@tarojs/components'
import { styli } from '@styli/core'
import presetDefault from '@styli/preset-default'
import { styled } from '@styli/styled'
import { theme } from './theme'

styli.configure(() => ({
  ...presetDefault,
  unit: 'rpx',
  inline: true,
  theme,
}))

export * from '@styli/theming'
export * from '@styli/core'
export * from '@styli/styled'

export const View = styled(TaroComponent.View)
export const MovableView = styled(TaroComponent.MovableView)
export const ScrollView = styled(TaroComponent.ScrollView)
export const Swiper = styled(TaroComponent.Swiper)
export const SwiperItem = styled(TaroComponent.SwiperItem)
export const Block = styled(TaroComponent.Block)
export const MovableArea = styled(TaroComponent.MovableArea)
export const CoverView = styled(TaroComponent.CoverView)
export const CoverImage = styled(TaroComponent.CoverImage)
export const Icon = styled(TaroComponent.Icon)
export const Text = styled(TaroComponent.Text)
export const RichText = styled(TaroComponent.RichText)
export const Progress = styled(TaroComponent.Progress)
export const Button = styled(TaroComponent.Button)
export const Checkbox = styled(TaroComponent.Checkbox)
export const CheckboxGroup = styled(TaroComponent.CheckboxGroup)
export const Editor = styled(TaroComponent.Editor)
export const Form = styled(TaroComponent.Form)
export const Input = styled(TaroComponent.Input)
export const Label = styled(TaroComponent.Label)
export const Picker = styled(TaroComponent.Picker)
export const PickerView = styled(TaroComponent.PickerView)
export const PickerViewColumn = styled(TaroComponent.PickerViewColumn)
export const Radio = styled(TaroComponent.Radio)
export const RadioGroup = styled(TaroComponent.RadioGroup)
export const Slider = styled(TaroComponent.Slider)
export const Switch = styled(TaroComponent.Switch)
export const Textarea = styled(TaroComponent.Textarea)
export const Image = styled(TaroComponent.Image)
export const Navigator = styled(TaroComponent.Navigator)
export const Camera = styled(TaroComponent.Camera)
export const Canvas = styled(TaroComponent.Canvas)
export const OpenData = styled(TaroComponent.OpenData)
export const Ad = styled(TaroComponent.Ad)
export const Video = styled(TaroComponent.Video)
export const Audio = styled(TaroComponent.Audio)
export const FunctionalPageNavigator = styled(TaroComponent.FunctionalPageNavigator)
export const LivePlayer = styled(TaroComponent.LivePlayer)
export const LivePusher = styled(TaroComponent.LivePusher)
export const Map = styled(TaroComponent.Map)
export const WebView = styled(TaroComponent.WebView)
export const OfficialAccount = styled(TaroComponent.OfficialAccount)
export const NavigationBar = styled(TaroComponent.NavigationBar)
export const PageMeta = styled(TaroComponent.PageMeta)
