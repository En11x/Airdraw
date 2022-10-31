import { styled } from "~/styles";

export const SmallIcon = styled('div',{
  height:'100%',
  borderRadius:'4px',
  marginRight:'1px',
  display:'grid',
  justifyContent:'center',
  alignItems:'center',
  outline:'none',
  border:'none',
  cursor:'pointer',
  pointerEvents:'all',
  color:'CurrentColor',

  '& svg':{
    height:16,
    width:16,
    strokeWidth:1
  },

  '& > *': {
    gridRow: 1,
    gridColumn: 1,
  },
})
