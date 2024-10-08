SetupTruckerInfo = function(data) {
    var NewRep = 0;
    var AmountOfTiers = (data.TiersData).length;
    var Difference = (data.CurrentTierData.max - data.CurrentTierData.min);
    var DivideAmount = (100 / Difference)
    var ProgressPercentage = data.CurrentRep * DivideAmount;

    if (data.CurrentTier != 1) {
        NewRep = (data.CurrentRep - data.TiersData[((data.CurrentTier - 1) - 1)].max);
        ProgressPercentage = NewRep * DivideAmount;
    }

    $("#trucker-name").html(QB.Phone.Data.PlayerData.charinfo.firstname + " " + QB.Phone.Data.PlayerData.charinfo.lastname);

    if (data.CurrentTierData.min == data.CurrentTierData.max) {
        $("#trucker-header-progress-current").html("Atual: " + data.CurrentRep + " REP");
        $("#trucker-header-tier").html("Nivel " + AmountOfTiers);
        $("#trucker-header-progress-next").html("Próximo: MAX");
    
        $(".trucker-header-progress-fill").css("width", "100%");
    } else {
        $("#trucker-header-progress-current").html("Atual: " + data.CurrentRep + " REP");
        $("#trucker-header-tier").html("Nivel " + data.CurrentTier);
        $("#trucker-header-progress-next").html("Próximo: " + (data.CurrentTierData.max - data.CurrentRep) + " REP");
    
        $(".trucker-header-progress-fill").css("width", ProgressPercentage + "%");
    }
}