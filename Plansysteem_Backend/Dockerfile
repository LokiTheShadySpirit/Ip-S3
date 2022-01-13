FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

ENV ASPNETCORE_ENVIRONMENT=Development

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR "/src"
COPY ["Plansysteem_BackEnd_Api/Plansysteem_BackEnd_ApI.csproj", "Plansysteem_Backend/Plansysteem_BackEnd_Api/"]
COPY ["Plansysteem_BackEnd_DAL/Plansysteem_BackEnd_DAL.csproj", "Plansysteem_Backend/Plansysteem_BackEnd_DAL/"]
COPY ["Plansysteem_BackEnd_DalInterfaces/Plansysteem_BackEnd_DalInterfaces.csproj", "Plansysteem_Backend/Plansysteem_BackEnd_DalInterfaces/"]
COPY ["Plansysteem_BackEnd_Logic/Plansysteem_BackEnd_Logic.csproj", "Plansysteem_BackEnd/Plansysteem_Backend_Logic/"]
COPY ["Plansysteem_BackEnd_LogicInterfaces/Plansysteem_BackEnd_LogicInterfaces.csproj", "Plansysteem_Backend/Plansysteem_BackEnd_LogicInterfaces/"]

RUN dotnet restore "Plansysteem_Backend/Plansysteem_BackEnd_Api/Plansysteem_BackEnd_ApI.csproj"
COPY . .
WORKDIR "/src/Plansysteem_BackEnd_Api/"
RUN dotnet build "Plansysteem_BackEnd_ApI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Plansysteem_BackEnd_ApI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Plansysteem_BackEnd.dll"]