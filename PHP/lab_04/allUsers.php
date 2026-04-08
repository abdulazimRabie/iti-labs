<?php
    include_once("connectDB.php");

    $pdo = connect();

    $sql   = "SELECT id, name, email, room, img_path FROM User";
    $users = $pdo->query($sql)->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>All Users</title>
</head>
<body>

    <h1>All Users (<?php echo count($users); ?>)</h1>
    <a href="createUser.php">+ Add User</a>

    <?php if (empty($users)): ?>
        <p>No users found.</p>
    <?php else: ?>
        <table border="1" cellpadding="8" cellspacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Room</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($users as $user): ?>
                    <tr>
                        <td><?php echo $user['id']; ?></td>
                        <td>
                            <img 
                                src="<?php echo htmlspecialchars($user['img_path']); ?>" 
                                width="60" height="60"
                                style="object-fit:cover"
                                onerror="this.src='https://placehold.co/60x60?text=N/A'"
                            >
                        </td>
                        <td><?php echo htmlspecialchars($user['name']); ?></td>
                        <td><?php echo htmlspecialchars($user['email']); ?></td>
                        <td><?php echo htmlspecialchars($user['room']); ?></td>
                        <td>
                            <a href="updateUser.php?id=<?php echo $user['id']; ?>">Edit</a> |
                            <a href="deleteUser.php?id=<?php echo $user['id']; ?>"
                               onclick="return confirm('Delete this user?')">Delete</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>

</body>
</html>