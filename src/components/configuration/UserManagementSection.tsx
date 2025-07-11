
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { 
  Users, 
  UserPlus, 
  Shield, 
  Key, 
  Search,
  Plus,
  Edit,
  Trash2,
  Settings,
  Calendar,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UserManagementSectionProps {
  language?: string;
}

export function UserManagementSection({ language = "fr" }: UserManagementSectionProps) {
  const { toast } = useToast();
  const [usersFilter, setUsersFilter] = useState("");
  const [rolesFilter, setRolesFilter] = useState("");
  const [permissionsFilter, setPermissionsFilter] = useState("");
  const [sessionsFilter, setSessionsFilter] = useState("");

  // Handlers pour les actions utilisateurs
  const handleAddUser = () => {
    console.log('Opening new user modal');
    // TODO: Ouvrir une modal de création d'utilisateur
    toast({
      title: "Nouveau utilisateur",
      description: "Ouverture du formulaire d'ajout d'utilisateur",
    });
  };

  const handleEditUser = (userEmail: string) => {
    console.log('Editing user:', userEmail);
    // TODO: Ouvrir une modal d'édition d'utilisateur
    toast({
      title: "Édition utilisateur",
      description: `Édition de l'utilisateur ${userEmail}`,
    });
  };

  const handleUserSettings = (userEmail: string) => {
    console.log('Opening user settings for:', userEmail);
    // TODO: Ouvrir les paramètres utilisateur
    toast({
      title: "Paramètres utilisateur",
      description: `Paramètres pour ${userEmail}`,
    });
  };

  // Handlers pour les rôles
  const handleAddRole = () => {
    console.log('Opening new role modal');
    // TODO: Ouvrir une modal de création de rôle
    toast({
      title: "Nouveau rôle",
      description: "Ouverture du formulaire d'ajout de rôle",
    });
  };

  const handleEditRole = (roleName: string) => {
    console.log('Editing role:', roleName);
    // TODO: Ouvrir une modal d'édition de rôle
    toast({
      title: "Édition rôle",
      description: `Édition du rôle ${roleName}`,
    });
  };

  const handleRolePermissions = (roleName: string) => {
    console.log('Managing permissions for role:', roleName);
    // TODO: Ouvrir la gestion des permissions du rôle
    toast({
      title: "Permissions du rôle",
      description: `Gestion des permissions pour ${roleName}`,
    });
  };

  // Handlers pour les permissions
  const handleAddPermission = () => {
    console.log('Opening new permission modal');
    // TODO: Ouvrir une modal de création de permission
    toast({
      title: "Nouvelle permission",
      description: "Ouverture du formulaire d'ajout de permission",
    });
  };

  const handleEditPermission = (permissionName: string) => {
    console.log('Editing permission:', permissionName);
    // TODO: Ouvrir une modal d'édition de permission
    toast({
      title: "Édition permission",
      description: `Édition de la permission ${permissionName}`,
    });
  };

  const handlePermissionUsers = (permissionName: string) => {
    console.log('Managing users for permission:', permissionName);
    // TODO: Ouvrir la gestion des utilisateurs pour cette permission
    toast({
      title: "Utilisateurs de la permission",
      description: `Gestion des utilisateurs pour ${permissionName}`,
    });
  };

  // Handlers pour les sessions
  const handleSessionDetails = (sessionUser: string) => {
    console.log('Viewing session details for:', sessionUser);
    // TODO: Afficher les détails de la session
    toast({
      title: "Détails de session",
      description: `Détails de la session pour ${sessionUser}`,
    });
  };

  const handleCloseSession = (sessionUser: string) => {
    console.log('Closing session for:', sessionUser);
    // TODO: Fermer la session utilisateur
    toast({
      title: "Session fermée",
      description: `Session fermée pour ${sessionUser}`,
      variant: "destructive",
    });
  };

  const handleCloseAllSessions = () => {
    console.log('Closing all sessions');
    // TODO: Fermer toutes les sessions
    if (confirm("Êtes-vous sûr de vouloir fermer toutes les sessions ?")) {
      toast({
        title: "Toutes les sessions fermées",
        description: "Toutes les sessions actives ont été fermées",
        variant: "destructive",
      });
    }
  };

  const handleFilterByDate = () => {
    console.log('Opening date filter');
    // TODO: Ouvrir un filtre par date
    toast({
      title: "Filtre par date",
      description: "Ouverture du filtre par date",
    });
  };

  const users = [
    { name: "Ahmed Benali", email: "ahmed.benali@justice.dz", role: "Administrateur", status: "Actif", lastLogin: "2025-01-02 14:30", department: "Justice" },
    { name: "Fatima Khelifi", email: "fatima.khelifi@interieur.dz", role: "Gestionnaire", status: "Actif", lastLogin: "2025-01-02 10:15", department: "Intérieur" },
    { name: "Mohamed Meziane", email: "mohamed.meziane@finances.dz", role: "Juriste", status: "Actif", lastLogin: "2025-01-01 16:45", department: "Finances" },
    { name: "Aicha Brahimi", email: "aicha.brahimi@commerce.dz", role: "Consultant", status: "Inactif", lastLogin: "2024-12-30 09:20", department: "Commerce" },
    { name: "Karim Benaissa", email: "karim.benaissa@travail.dz", role: "Valideur", status: "Actif", lastLogin: "2025-01-02 08:45", department: "Travail" },
    { name: "Samira Belarbi", email: "samira.belarbi@sante.dz", role: "Lecteur", status: "Actif", lastLogin: "2025-01-01 13:20", department: "Santé" },
    { name: "Omar Khadra", email: "omar.khadra@education.dz", role: "Gestionnaire", status: "Suspendu", lastLogin: "2024-12-28 11:30", department: "Éducation" },
    { name: "Nadia Saidi", email: "nadia.saidi@pm.dz", role: "Administrateur", status: "Actif", lastLogin: "2025-01-02 15:10", department: "Premier Ministère" }
  ].filter(user => 
    user.name.toLowerCase().includes(usersFilter.toLowerCase()) ||
    user.email.toLowerCase().includes(usersFilter.toLowerCase()) ||
    user.role.toLowerCase().includes(usersFilter.toLowerCase()) ||
    user.department.toLowerCase().includes(usersFilter.toLowerCase())
  );

  const roles = [
    { name: "Administrateur", users: 15, permissions: 45, description: "Accès complet au système", status: "Actif" },
    { name: "Gestionnaire", users: 89, permissions: 32, description: "Gestion des contenus et utilisateurs", status: "Actif" },
    { name: "Juriste", users: 234, permissions: 28, description: "Consultation et analyse juridique", status: "Actif" },
    { name: "Valideur", users: 67, permissions: 18, description: "Validation des documents", status: "Actif" },
    { name: "Consultant", users: 123, permissions: 15, description: "Consultation en lecture seule", status: "Actif" },
    { name: "Lecteur", users: 456, permissions: 8, description: "Lecture des documents publics", status: "Actif" },
    { name: "Archiviste", users: 23, permissions: 12, description: "Gestion des archives", status: "Inactif" },
    { name: "Support", users: 12, permissions: 22, description: "Support technique et assistance", status: "Actif" }
  ].filter(role => 
    role.name.toLowerCase().includes(rolesFilter.toLowerCase()) ||
    role.description.toLowerCase().includes(rolesFilter.toLowerCase())
  );

  const permissions = [
    { name: "Consulter Textes", category: "Lecture", users: 1250, description: "Lecture des textes juridiques" },
    { name: "Modifier Textes", category: "Écriture", users: 234, description: "Modification des textes juridiques" },
    { name: "Publier Textes", category: "Publication", users: 45, description: "Publication des textes juridiques" },
    { name: "Gérer Utilisateurs", category: "Administration", users: 23, description: "Gestion des comptes utilisateurs" },
    { name: "Configurer Système", category: "Administration", users: 12, description: "Configuration du système" },
    { name: "Consulter Statistiques", category: "Analyse", users: 156, description: "Accès aux statistiques" },
    { name: "Exporter Données", category: "Export", users: 89, description: "Export des données" },
    { name: "Gérer Procédures", category: "Procédures", users: 345, description: "Gestion des procédures administratives" }
  ].filter(permission => 
    permission.name.toLowerCase().includes(permissionsFilter.toLowerCase()) ||
    permission.category.toLowerCase().includes(permissionsFilter.toLowerCase())
  );

  const activeSessions = [
    { user: "Ahmed Benali", ip: "192.168.1.100", device: "Chrome/Windows", location: "Alger", start: "14:30", duration: "2h15m", status: "Active" },
    { user: "Fatima Khelifi", ip: "192.168.1.101", device: "Firefox/Linux", location: "Oran", start: "10:15", duration: "5h45m", status: "Active" },
    { user: "Mohamed Meziane", ip: "10.0.0.25", device: "Safari/macOS", location: "Constantine", start: "16:45", duration: "45m", status: "Active" },
    { user: "Karim Benaissa", ip: "172.16.0.50", device: "Edge/Windows", location: "Annaba", start: "08:45", duration: "7h15m", status: "Active" },
    { user: "Samira Belarbi", ip: "192.168.2.75", device: "Chrome/Android", location: "Sétif", start: "13:20", duration: "2h40m", status: "Idle" },
    { user: "Nadia Saidi", ip: "10.1.0.100", device: "Firefox/Windows", location: "Alger", start: "15:10", duration: "50m", status: "Active" }
  ].filter(session => 
    session.user.toLowerCase().includes(sessionsFilter.toLowerCase()) ||
    session.location.toLowerCase().includes(sessionsFilter.toLowerCase()) ||
    session.device.toLowerCase().includes(sessionsFilter.toLowerCase())
  );

  return (
    <div className="space-y-6">

      <Tabs defaultValue="users" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="users">Utilisateurs</TabsTrigger>
          <TabsTrigger value="roles">Rôles</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher un utilisateur..."
                className="pl-10"
                value={usersFilter}
                onChange={(e) => setUsersFilter(e.target.value)}
              />
            </div>
            <Button className="ml-4" onClick={handleAddUser}>
              <UserPlus className="w-4 h-4 mr-2" />
              Nouvel Utilisateur
            </Button>
          </div>
          
          <div className="space-y-3">
            {users.map((user, index) => (
              <Card key={index}>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-gray-900">{user.name}</h4>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{user.role}</Badge>
                          <Badge variant="outline">{user.department}</Badge>
                          <Badge className={
                            user.status === 'Actif' ? 'bg-green-100 text-green-800' :
                            user.status === 'Inactif' ? 'bg-gray-100 text-gray-800' :
                            'bg-red-100 text-red-800'
                          }>
                            {user.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Dernière connexion</p>
                      <p className="text-sm font-medium">{user.lastLogin}</p>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm" onClick={() => handleEditUser(user.email)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleUserSettings(user.email)}>
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="roles" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher un rôle..."
                className="pl-10"
                value={rolesFilter}
                onChange={(e) => setRolesFilter(e.target.value)}
              />
            </div>
            <Button className="ml-4" onClick={handleAddRole}>
              <Plus className="w-4 h-4 mr-2" />
              Nouveau Rôle
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roles.map((role, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-blue-600" />
                        <h4 className="font-semibold text-gray-900">{role.name}</h4>
                        <Badge className={role.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                          {role.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{role.description}</p>
                      <div className="flex gap-4 text-sm text-gray-500">
                        <span>{role.users} utilisateurs</span>
                        <span>{role.permissions} permissions</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditRole(role.name)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleRolePermissions(role.name)}>
                        <Key className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher une permission..."
                className="pl-10"
                value={permissionsFilter}
                onChange={(e) => setPermissionsFilter(e.target.value)}
              />
            </div>
            <Button className="ml-4" onClick={handleAddPermission}>
              <Plus className="w-4 h-4 mr-2" />
              Nouvelle Permission
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {permissions.map((permission, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Key className="w-5 h-5 text-orange-600" />
                        <h4 className="font-semibold text-gray-900">{permission.name}</h4>
                        <Badge variant="outline">{permission.category}</Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{permission.description}</p>
                      <p className="text-xs text-gray-500">{permission.users} utilisateurs affectés</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditPermission(permission.name)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handlePermissionUsers(permission.name)}>
                        <Users className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher une session..."
                className="pl-10"
                value={sessionsFilter}
                onChange={(e) => setSessionsFilter(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleFilterByDate}>
                <Calendar className="w-4 h-4 mr-2" />
                Filtrer par date
              </Button>
              <Button variant="destructive" onClick={handleCloseAllSessions}>
                Fermer toutes les sessions
              </Button>
            </div>
          </div>
          
          <div className="space-y-3">
            {activeSessions.map((session, index) => (
              <Card key={index}>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>{session.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-gray-900">{session.user}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{session.device}</span>
                          <span>{session.ip}</span>
                          <span>{session.location}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">Débuté à {session.start} - Durée: {session.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={session.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                        {session.status}
                      </Badge>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm" onClick={() => handleSessionDetails(session.user)}>
                          Détails
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => handleCloseSession(session.user)}>
                          Fermer
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
