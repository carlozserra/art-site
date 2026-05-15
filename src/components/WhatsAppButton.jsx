const WhatsAppButton = ({ productName, className = "", variant = "green", label, itemType = "equipamento" }) => {
  const phoneNumber = "557332232191";
  const message = productName 
    ? `Olá! Gostaria de fazer um orçamento do ${itemType}: ${productName}.`
    : "Olá! Gostaria de falar com a equipe técnica sobre os serviços da ART Engenharia.";
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const styles = {
    gold: "bg-primary text-on-primary hover:brightness-110",
    green: "bg-[#20BA5A] text-white hover:bg-[#1a9c4a] shadow-[0_4px_15px_rgba(32,186,90,0.2)]",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 px-4 py-3 font-headline font-bold text-[10px] tracking-widest uppercase transition-all duration-300 active:scale-[0.98] ${styles[variant]} ${className}`}
    >
      <img src="/imagens/whatsappicon.png" alt="WhatsApp" className="w-5 h-5 object-contain brightness-0 invert drop-shadow-sm" />
      {label || (variant === 'green' ? 'SOLICITAR ORÇAMENTO VIA WHATSAPP' : 'SOLICITAR VALOR')}
    </a>
  );
};

export default WhatsAppButton;
