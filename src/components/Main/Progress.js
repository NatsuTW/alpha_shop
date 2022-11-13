import { useState } from 'react';
import ProgressStep from "./Progress/ProgressStep";
import ProgressControl from "./Progress/ProgressControl";
import StepForm from './Progress/StepForm';


import styles from "./Progress.module.css"

export default function Progress() {
  const [currentStep, setCurrentStep] = useState(1)

  function handleClickNext() {
    if(currentStep < 3)
    setCurrentStep(currentStep + 1)
  }

  function handleClickPrev() {
    if(currentStep > 1)
    setCurrentStep(currentStep - 1 )
  }

  return (
    <section className={styles.progress__container}>
      <h2 className={styles.progress__title}>結帳</h2>
      <ProgressStep 
        currentStep={currentStep}/>
      <StepForm 
        currentStep={currentStep}/>
      <ProgressControl
        currentStep={currentStep} 
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
      />
    </section>
  )
}