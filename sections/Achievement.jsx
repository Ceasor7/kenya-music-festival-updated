'use client'

const Achievement = () => {

  return (
    <div
     className="flex flex-col mb-4 mx-6 py-16 lg:mx-20 px-6 lg:px-12">
        <h2 className="text-4xl font-custom font-medium">Achievement</h2>
        <div className="flex flex-col mt-7 sm:flex-row sm:space-x-10 ">
            <div className="flex justify-center mb-7">
            <img src="/achivement.jpg" alt="KMF Background" className="rounded-lg shadow-lg" />
            </div>
            <div className="flex items-center">
                <p className="font-custom leading-relaxed text-left">
                Music has grown to higher levels attracting participants from EAC, Europe and India. We have managed to organize East African competition.
                Their a noticeable change in behavior after passing out messages on various pertinent issues through music ,dance and elocution
                Apart from singing and dancing we have incorporated elocution which included poems from English, Kiswahili, French, German, Arabic and Sign language,
                For the past three years we have managed to host the Kenya Music Festival National in one institution for proper coordination, management and fast delivery.
                </p>
        </div>
        </div>
    </div>
  )
}

export default Achievement