export interface Props {
  name: string
  title:string
  showControls: boolean
  toggleControls: () => void
  addClick: () => void
  onChangeName: (e: any) => void
}