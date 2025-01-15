import Header from '../Components/Header';
import IndustriesSection from '../Components/IndustriesSection';
import banner from '../assets/Banner/In-1.jpeg'
import { assets } from '../assets/assets';


const industriesData = [
    {
        smallText: 'How We Can Help',
        mainImage: assets.cbindustry,
        sectionTitle: 'BANKING',
        sectionTitle2: 'COMMERCIAL BANKS',
        sectionContentTitle: 'Public and Private Commercial Banks',
        sectionContentPara: 'The banking landscape is undergoing rapid transformation with evolving regulations, digitization, and changing customer expectations. Banks need agile strategies to stay competitive and ensure compliance while enhancing customer experience.',
        carouselData: [
            {
                image: assets.bank1 ,
                content: 'Strategic Planning and Market Entry Advisory.'
            },
            {
                image: assets.bank2,
                content: 'Risk Management and Regulatory Compliance.'
            },
            {
                image: assets.bank3,
                content: 'Operational Efficiency and Digital Transformation Support.'
            },
            {
                image: assets.bank4,
                content: 'M&A Due Diligence and Integration.'
            },
            {
                image: assets.bank5,
                content: 'Business Continuity and Disaster Recovery Planning.'
            },
        ],
    },
    {
        smallText: 'How We Can Help',
        mainImage: assets.finindustry,
        sectionTitle: 'FINANCIAL',
        sectionTitle2: 'FINTECH',
        sectionContentTitle: 'FINTECH, Asset Management Firms, Funds, AIFs',
        sectionContentPara: 'The financial services sector is at the forefront of innovation, with emerging technologies reshaping how businesses operate. Companies need to balance innovation with regulatory compliance while driving growth and customer trust.',
        carouselData: [
            {
                image: assets.fin1,
                content: 'Digital transformation strategies for FINTECH and asset management.' 
            },
            {
                image: assets.fin2,
                content: 'Regulatory compliance (AML, KYC, FATCA).'
            },
            { 
                image: assets.fin3, 
                content: 'Risk management for investment funds and AIFs.' 
            },
            { 
                image: assets.fin4, 
                content: 'Support for product development and market launch.' 
            },
            { 
                image: assets.fin5, 
                content: 'Data protection strategies and cybersecurity frameworks.' 
            },
        ],
    },
    {
        smallText: 'How We Can Help',
        mainImage: assets.reindustry,
        sectionTitle: 'INSURANCE',
        sectionTitle2: 'REINSURANCE',
        sectionContentTitle: 'General Insurance, Reinsurance',
        sectionContentPara: 'Insurance companies face increased regulatory scrutiny, evolving customer expectations, and the need for operational efficiency. Managing risk and navigating global insurance regulations is critical for long-term sustainability.',
        carouselData: [
            { 
                image: assets.ins1, 
                content: 'Regulatory compliance and risk management frameworks.' 
            },
            { 
                image: assets.ins2,
                content: 'Business process optimization and performance management.' 
            },
            { 
                image: assets.ins3, 
                content: 'Support for reinsurance strategies and structuring.' 
            },
            { 
                image: assets.ins4, 
                content: 'Cybersecurity assessments for digital insurance platforms.' 
            },
            { 
                image: assets.ins5, 
                content: 'Corporate governance and secretarial services for insurers.' 
            },
        ],
    },
    {
        smallText: 'How We Can Help',
        mainImage: assets.sfindustry,
        sectionTitle: 'FINANCIAL',
        sectionTitle2: 'SPECIALIZED FINANCIAL',
        sectionContentTitle: 'Micro Finance, Leasing & Factoring',
        sectionContentPara: 'Specialized financial institutions play a crucial role in expanding financial inclusion and providing alternative financing solutions. It is crucial to have robust operational frameworks and compliance mechanisms to grow sustainably and reach underserved markets.',
        carouselData: [
            {
                image: assets.sap1, 
                content: 'Risk management and compliance advisory for microfinance and leasing firms.' 
           },
           {
                image: assets.sap2, 
                content: 'Operational efficiency and cost optimization strategies.' 
           },
           { 
               image: assets.sap3, 
               content: 'Business model development and strategic advisory.'
           },
           { 
               image: assets.sap4, 
               content: 'Implementation of internal control systems and policy development.' 
           },
           { 
               image: assets.sap5, 
               content: 'Corporate governance support and secretarial services.' 
           },
        ],
    },
    {
        smallText: 'How We Can Help',
        mainImage: assets.reits,
        sectionTitle: 'ENTITIES',
        sectionTitle2: 'REIT\'s,FAMILY OFFICES',
        sectionContentTitle: 'General Insurance, Reinsurance',
        sectionContentPara: 'Insurance companies face increased regulatory scrutiny, evolving customer expectations, and the need for operational efficiency. Managing risk and navigating global insurance regulations is critical for long-term sustainability.',
        carouselData: [
            { 
                image: assets.ent1, 
                content: 'Strategic advisory on asset management and portfolio optimization.' 
            },
            { 
                image: assets.ent2,
                content: 'Compliance and regulatory services tailored for REITs and family offices.' 
            },
            { 
                image: assets.ent3, 
                content: 'Tax efficiency strategies and legal structuring support.' 
            },
            { 
                image: assets.ent4, 
                content: 'Corporate governance and secretarial services for multi-entity groups.' 
            },
            { 
                image: assets.ent5,
                 content: 'Business continuity and risk mitigation planning.' 
            },
        ],
    },
];

const Industries = () => {
    return (
        <div>
            <Header
                title="WHO WE SERVE"
                para="Insights and advice, tailored to your needs."
                image={banner}
            />
            {industriesData.map((industry, index) => (
                <IndustriesSection
                    key={index}
                    smallText={industry.smallText}
                    mainImage={industry.mainImage}
                    sectionTitle={industry.sectionTitle}
                    sectionTitle2={industry.sectionTitle2}
                    sectionContentTitle={industry.sectionContentTitle}
                    sectionContentPara={industry.sectionContentPara}
                    carouselData={industry.carouselData}
                    reverse={index !== 0 && index !== industriesData.length - 1 ? 'reverse' : ''}
                    last={index === industriesData.length - 1 ? 'lastContainer' : ''}
                />
            ))}
        </div>
    );
};

export default Industries;
