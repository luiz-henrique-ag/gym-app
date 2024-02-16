import React, { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import ReactInputMask from 'react-input-mask'

interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "cpf" | "phone" | "date" | "halfDate" |"currency" | "numberOnly"
}

const InputMask: React.FC<InputMaskProps> = ({
  className,
  mask,
  ...props
}) => {
  let maskChosen : string | (string | RegExp)[] = "";
  switch (mask) {
    case 'cpf':
      maskChosen = "999.999.999-99";
      break;
    case 'phone':
      maskChosen = "(99) 99999-9999";
      break;
    case 'date':
      maskChosen = "99/99/9999"; 
      break;
    case 'halfDate':
      maskChosen = "99/99"; 
      break;
    case 'currency':
      maskChosen = ""; 
      break;
    case 'numberOnly':
      maskChosen = [/[0-9]/]; 
      break;
    default:
      break;
  }
  return (
    <ReactInputMask
      {...props}
      className={cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className)}
      mask={maskChosen}
    />
  )
}

export default InputMask