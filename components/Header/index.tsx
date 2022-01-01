interface IHeader {
    logoColor: string
}

const Header: React.FC<IHeader> = ({ logoColor }) => {
    return (
        <header className="bg-gradient-to-r from-purple-900 to-purple-500 border-gray-200 shadow-2xl mb-10 px-3 md:px-1">
        <nav className="container mx-auto text-white py-3 flex space-x-4 items-end">
          <div className="w-24 my-3 min-h-fit">
            <svg className="object-scale-down" version="1.1" id="electric_car" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 621 326" enableBackground="new 0 0 621 326" xmlSpace="preserve">
              <g id="parts">
                
                  <path fill="none" stroke={logoColor} strokeWidth="16.5789" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                  M557.688,285.598l50.001-1.004c0,0,5.526-43.436-9.671-55.87c-29.891-13.652-96.613-22.273-96.613-22.273
                  s-40.147-49.191-98.188-50.95c0,0-107.595-10.609-244.784,29.844l-16.334,82.665l40.453,6.28"/>
                
                  <path fill="none" stroke={logoColor} strokeWidth="16.5789" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                  M534.466,277.079c0,19.075-15.464,34.539-34.539,34.539l0,0c-19.075,0-34.54-15.464-34.54-34.539l0,0
                  c0-19.075,15.465-34.539,34.54-34.539l0,0C519.002,242.54,534.466,258.004,534.466,277.079L534.466,277.079z"/>
                
                  <path fill="none" stroke={logoColor} strokeWidth="16.5789" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                  M277.111,277.961c0,19.074-15.464,34.539-34.539,34.539l0,0c-19.075,0-34.54-15.465-34.54-34.539l0,0
                  c0-19.075,15.464-34.54,34.54-34.54l0,0C261.647,243.421,277.111,258.886,277.111,277.961L277.111,277.961z"/>
                
                  <line fill="none" stroke={logoColor} strokeWidth="16.5789" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="443.282" y1="285.368" x2="303.743" y2="283.987"/>
                
                  <path fill="none" stroke={logoColor} strokeWidth="15.211" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                  M62.161,50.407c0,0,54.339,19.869,72.21-7.488c16.708-25.576-19.29-38.083-32.389-24.122c-20.672,22.033-9.072,48.568,1.33,57.779
                  c10.404,9.209,51.912,12.609,67.331-10.722c15.557-23.541-20.945-43.675-38.215-20.188c-13.209,17.964,0.71,51.149,12.434,58.717
                  c11.724,7.568,45.592,7.599,60.168-14.365c14.876-22.417-17.145-38.944-31.698-22.05c-23.634,27.434,14.729,52.402,10.256,70.486
                  C179,157,157,170,120,154c-44.766-19.358-80.033,19.935-60,60s69.665,23.704,92.46,0.218"/>
                <g>
                  
                    <path fill="none" stroke={logoColor} strokeWidth="15.211" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                    M31.573,29.086c0,0,29.723-2.794,30.395,20.724c0.69,24.178-16.579,22.796-30.395,24.178V29.086z"/>
                  
                    <line fill="none" stroke={logoColor} strokeWidth="15.211" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="30.191" y1="39.448" x2="11.54" y2="39.448"/>
                  
                    <line fill="none" stroke={logoColor} strokeWidth="15.211" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="30.191" y1="62.244" x2="11.54" y2="62.244"/>
                </g>
              </g>
            </svg>
          </div>

          <div>
            <h1 className="font-semibold">CompareEV <small className="text-lg hidden md:inline">The Electric Vehicle Comparison Site</small></h1>
          </div>
        </nav>
      </header>
    )
}

export default Header;


